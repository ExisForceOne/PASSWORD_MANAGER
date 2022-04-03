import KeysContainer from "../../KeysContainer/KeysContainer"
import KeysItem from "../../KeysItem/KeysItem"
import CollapseWeaknessList from '../CollapseWeaknessList/CollapseWeaknessList'

export default function Tab(props) {
    
    return (
        <KeysContainer 
            header={
                !props.data.length
                ? 'You dont have any passwords in this category.'
                : null
            }
        >
            {
            props.data.map(item=>
                <div key={item._id}>
                    <KeysItem
                    {...item}
                    />
                    {
                        item.strength.weekness.length
                        ? <CollapseWeaknessList weakness={item.strength.weekness} />
                        : null
                    }
                    
                </div>

                )
            }
    </KeysContainer>
    )
}