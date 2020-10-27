import styled from 'styled-components';


export const ContainerHeader = styled.div`
padding: 10px; 
display: grid;
grid-template-rows: 40px;
grid-template-columns: 60px 1fr;

img {
    border-radius: 50%;
    width: 40px;
    grid-column: 1/2;
}
p {
    grid-column: 2/3;
    float: left;
}

`

export const ImageFooter = styled.div`
    .likeButton {
        background: url('../../heart-outline.svg');
    }
`

export const Testdiv = styled.div`
    color: red;
    font-size: 12px;
`


//background-color: ${(props) => (props.isTrue ? 'red': 'blue')};
