import styled from "styled-components";

function ItemList({ title, description }) {
    return (
        <Itemlist>
            <strong>{title}</strong>
            <p>{description}</p>
            <hr />
        </Itemlist>
    )
}

export default ItemList;

const Itemlist = styled.div`
    margin: 24px 0;

    strong{
        color: #539bf5;
        font-size: 24px;
    }

    p {
        color: #999999;
        font-size: 14px;
        margin: 15px 0;
    }
`;