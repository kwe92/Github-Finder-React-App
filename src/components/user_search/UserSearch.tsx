import React from "react";
import { FlexWrapper, Form, Input, ClearButton, InputContainer, InputButton} from "./UserSearchStyles";

const UserSearch = (props:{}) => {
    return (
        <FlexWrapper>
            {/* Form */}
            <InputContainer>
            <Form>
                <Input/>
            </Form>
            <InputButton>
                GO
            </InputButton>
            </InputContainer>
           

            {/* Clear button */}
            <>
            <ClearButton>
                CLEAR
            </ClearButton>
            </>
        </FlexWrapper>
    );
};

export default UserSearch;