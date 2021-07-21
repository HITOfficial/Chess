import Field from "./Field"

function updateField(element) {
    return (
        <Field fieldNumber={element.fieldNumber} free={element.free} player={element.player} figure={element.figure}></Field>

    )
}


export default updateField