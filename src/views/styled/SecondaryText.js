import styled from "styled-components";

const SecondaryText = styled.p`
    color: ${({theme}) => theme.textSecondary};
    font-size: 0.8em;
`;

export const SecondaryTextNoSpacing = styled(SecondaryText)`
    padding: 0;
    margin: 0;
`;

export default SecondaryText;