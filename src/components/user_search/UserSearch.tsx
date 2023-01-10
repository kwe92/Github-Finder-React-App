import React, {FunctionComponent, useState} from "react";
import { SetState } from "../../types/state/stateTypes";
import { FlexWrapper, Form, Input, ClearButton, InputButton} from "./UserSearchStyles";

interface Props{
    setSearch: CallableFunction
};

const UserSearch: FunctionComponent<Props> = (props:Props): JSX.Element => 
       {
        const [userInput, setUserInput]: [string, SetState<string>] = useState("");

        return (
       <FlexWrapper>
            {/* Form */}
            <>
            <Form onSubmit={(event)=>{
                event.preventDefault();
                // set error if user input is blank
                userInput ? 
                props.setSearch(userInput, false): props.setSearch(userInput, true);
                setUserInput("");

            }}>
                <Input onChange={(event)=>{
                    const searchResult = event.target.value;
                    setUserInput(event.target.value);

                }}
                value={userInput}
                />
                 <InputButton>
                GO
            </InputButton>
            </Form>
           
            </>
            {/* Clear button */}
            <>
            <ClearButton onClick={()=>{
                props.setSearch(userInput);
            }}>
                CLEAR
            </ClearButton>
            </>
        </FlexWrapper>
        );
        };

export default UserSearch;