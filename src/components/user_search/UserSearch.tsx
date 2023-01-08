import React, {useState} from "react";
import { SetState } from "../../types/state/stateTypes";
import { FlexWrapper, Form, Input, ClearButton, InputButton} from "./UserSearchStyles";

const UserSearch = (props:{setSearch: SetState<string>}): JSX.Element => 
       {
        const [userInput, setUserInput] = useState("");

        return (
       <FlexWrapper>
            {/* Form */}
            <>
            <Form onSubmit={(event)=>{
                event.preventDefault();
                props.setSearch(userInput);
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