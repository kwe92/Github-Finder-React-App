import styled from "styled-components";

interface Props  {
    Secondary?: boolean,
};


export const Title = styled.div`

    font-size: 3.25rem;

    color:white;

`;

export const ContentBody = styled.p`

    color: white;

    font-size: 1.75rem;

`;

export const ContentContainer = styled.p<Props>`

    font-size: 1rem;

    color: ${ (p) => p.Secondary ? "white" : "grey"};

`;

export const ContainerWrapper = styled.div`

    display: flex;

    flex-direction: row;

    align-items: center;

`;

export const AboutContentWrapper = styled.div`

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