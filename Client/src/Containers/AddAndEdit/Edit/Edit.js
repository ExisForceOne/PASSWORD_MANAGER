import SharedForm from "../SharedForm/SharedForm"

const fakeData = {
    color: "hsl(154,100%,49%)",
    desc: "Testing",
    fav: true,
    login: "Edit",
    name: "TEST EDINT",
    password: "yinwmCkiK$VK?PFmPBGcsif?fflnLarx",
    url: "HERE",
}

export default function Edit(props){

    return (
        <SharedForm data={fakeData}/>
    )
}