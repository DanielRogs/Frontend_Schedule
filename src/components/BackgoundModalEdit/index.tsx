import React from "react";
import ModalEdit from "../ModalEdit";
import {
    Div,
} from './styled'

interface Props {
}


class BackgroundModalEdit extends React.Component<Props>{
    constructor(props: Props) {
        super(props)
    }

    render(): React.ReactNode {
        return (

            <Div>
                <ModalEdit />
            </Div>

        )
    }


}

export default BackgroundModalEdit;