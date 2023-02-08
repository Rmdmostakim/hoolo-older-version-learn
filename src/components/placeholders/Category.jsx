import React from 'react';
import { Placeholder } from 'rsuite';

function Category({ graph, rows }) {
    return (
        <>
            <Placeholder.Paragraph style={{ marginTop: 10 }} graph={graph} rows={rows} />
            <Placeholder.Paragraph style={{ marginTop: 10 }} graph={graph} rows={rows} />
            <Placeholder.Paragraph style={{ marginTop: 10 }} graph={graph} rows={rows} />
            <Placeholder.Paragraph style={{ marginTop: 10 }} graph={graph} rows={rows} />
        </>
    );
}

export default Category;
