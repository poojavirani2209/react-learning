export function ButtonComponent(props) {
    return (<button onClick={() => {
        props.onClick(props.children)
    }}>{props.children}</button>)
}