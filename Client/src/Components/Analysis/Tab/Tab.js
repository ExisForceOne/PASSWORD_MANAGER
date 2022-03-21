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
            props.data.map(x=>
                <div key={x._id}>
                    <KeysItem
                    key={x._id}
                    name={x.name}
                    color={x.color}
                    fav={x.fav} 
                    />
                    {
                        x.strength.weekness.length
                        ? <CollapseWeaknessList weakness={x.strength.weekness} />
                        : null
                    }
                    
                </div>

                )
            }
    </KeysContainer>
    )
}