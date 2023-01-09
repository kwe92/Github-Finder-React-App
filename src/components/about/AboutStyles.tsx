import styled, { StyledComponent } from "styled-components";
import { TypeStyledComponent } from "../../types/state/styled_component/types";


interface Props {
    secondary?: boolean;
};

const Title: TypeStyledComponent<"div",{}> = styled.div`

    font-size: 3.25rem;

    color:white;

`;

const ContentBody: TypeStyledComponent<"p", {}> = styled.p`

    color: white;

    font-size: 1.75rem;

`;

const ContentContainer: TypeStyledComponent<"p", Props> = styled.p<Props>`

    font-size: 1rem;

    color: ${ (p) => p.secondary ? "white" : "grey"};

`;

const ContainerWrapper: TypeStyledComponent<"div",{}> = styled.div`

    display: flex;

    flex-direction: row;

    gap: 0.25rem;

    align-items: center;

`;

const AboutContentWrapper: TypeStyledComponent<"div",{}> = styled.div`

    display: flex;

    flex-direction: column;

    gap: 1rem;

    padding-left: 2.5rem;

    @media (max-width : 1024px) {
        ${Title} {
            font-size: 2.25rem;
        }
    }

    @media (max-width : 1024px) {
        ${ContentBody} {
            font-size: 1.25rem;
        }
    }

    @media (max-width : 1024px) {
        ${ContentContainer} {
            font-size: 0.75rem;
        }
    }

    @media (max-width : 768px) {
        ${Title} {
            font-size: 2rem;
        }
    }
    
    @media (max-width : 450px) {
        ${Title} {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width : 450px) {
        ${ContentBody} {
            font-size: 0.75rem;
        }
    }

    
    @media (max-width : 450px) {
        ${ContentContainer} {
            font-size: o.5rem;
        }
    }

    @media (max-width : 450px) {
        padding: 0rem 1.5rem;
    }
}

`;

export {Title,ContentBody,ContentContainer,ContainerWrapper,AboutContentWrapper}
