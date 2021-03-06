import style from "./AddAndEditForm.module.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import yupValidators from "../../../Helpers/yupValidators";
import api from "../../../Api";
import AuthContext from "../../../Contexts/AuthContext";
import SuccessMsgContext from "../../../Contexts/SuccessMsgContext";

import Form from "../../../Components/Forms/Form/Form";
import {
  Checkbox,
  Input,
  Textarea,
} from "../../../Components/Forms/Input/Input";
import SubmitAndCancelBtnContainer from "../../../Components/Buttons/SubmitAndCancelBtnContainer/SubmitAndCancelBtnContainer";
import VisibleBtn from "../../../Components/Buttons/VisibleBtn/VisibleBtn";
import OpenGeneratorBtn from "../../../Components/Buttons/OpenGeneratorBtn/OpenGeneratorBtn";
import OpenColorPickerBtn from "../../../Components/Buttons/OpenColorPickerBtn/OpenColorPickerBtn";
import FetchError from "../../../Components/FetchError/FetchError";

import randomHSL from "../../../Features/randomHSL";
import PasswordGenerator from "../../PasswordGenerator/PasswordGenerator";
import ColorPicker from "../../ColorPicker/ColorPicker";

export default function AddAndEditForm({ data, endpoint }) {
  let navigate = useNavigate();
  const { authUser } = useContext(AuthContext);
  const { setSuccessMsg } = useContext(SuccessMsgContext);

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [generatorIsVisible, setGeneratorIsVisible] = useState(false);
  const [colorPickerIsVisible, setColorPickerIsVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      login: data?.login || "",
      password: data?.password || "",
      color: data?.color || randomHSL(),
      url: data?.url || "",
      desc: data?.desc || "",
      fav: data?.fav || false,
    },
    validationSchema: yupValidators.addAndEdit,
    onSubmit: (values) => submitHandler(values),
  });

  async function submitHandler(values) {
    const config = {
      headers: { Authorization: `Bearer ${authUser}` },
    };

    setLoading(true);
    setErrMessage(null);

    try {
      await api.post(`/keys/${endpoint}`, values, config);
      navigate(-1);
      setSuccessMsg(`Key ${data ? "edited!" : "added!"}`);
    } catch (err) {
      setLoading(false);

      console.log(err.toJSON());

      setErrMessage(
        err.response
          ? err.response.data.message
          : "Something went wrong, please try again later!"
      );
    }
  }

  return (
    <div className={style.container}>
      {generatorIsVisible ? (
        <PasswordGenerator
          close={() => setGeneratorIsVisible(false)}
          onSubmit={(value) => formik.setFieldValue("password", value)}
        />
      ) : null}

      {colorPickerIsVisible ? (
        <ColorPicker
          color={formik.values.color}
          close={() => setColorPickerIsVisible(false)}
          onSubmit={(value) => formik.setFieldValue("color", value)}
        />
      ) : null}

      <Form title={"Add new key"} onSubmit={formik.handleSubmit}>
        <p className={style.infoBar}>Required:</p>

        <Input
          label={"Name:"}
          id={"name"}
          name={"name"}
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />

        <Input
          label={"Login:"}
          id={"login"}
          name={"login"}
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.login}
          onBlur={formik.handleBlur}
          error={
            formik.touched.login && formik.errors.login
              ? formik.errors.login
              : null
          }
        />

        <div className={style.passContainer}>
          <Input
            label={"Password:"}
            id={"password"}
            name={"password"}
            type={passwordIsVisible ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <div className={style.btnContainer}>
            <VisibleBtn state={{ passwordIsVisible, setPasswordIsVisible }} />
            <OpenGeneratorBtn onClick={() => setGeneratorIsVisible(true)} />
          </div>
        </div>

        <p>Color:</p>
        <OpenColorPickerBtn
          color={formik.values.color}
          onClick={() => setColorPickerIsVisible(true)}
        />

        <p className={style.infoBar}>Optional:</p>

        <Input
          label={"Website URL:"}
          id={"url"}
          name={"url"}
          type={"text"}
          placeholder="ex: https://www.google.pl/"
          onChange={formik.handleChange}
          value={formik.values.url}
          onBlur={formik.handleBlur}
          error={
            formik.touched.url && formik.errors.url ? formik.errors.url : null
          }
        />

        <Textarea
          label={"Description:"}
          id={"desc"}
          name={"desc"}
          onChange={formik.handleChange}
          value={formik.values.desc}
          onBlur={formik.handleBlur}
          error={
            formik.touched.desc && formik.errors.desc
              ? formik.errors.desc
              : null
          }
        />

        <Checkbox
          label="Marked as favorite"
          id="favorite"
          onChange={(e) => {
            formik.setFieldValue("fav", e.target.checked);
          }}
          checked={formik.values.fav}
        />

        <SubmitAndCancelBtnContainer
          backText={"Cancel"}
          backOnClick={() => {
            navigate(-1);
          }}
          submitText={"Confirm"}
          submitLoading={loading}
        />
        {errMessage ? <FetchError message={errMessage} /> : null}
      </Form>
    </div>
  );
}
