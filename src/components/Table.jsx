
function Table(){
    const books =[
        {id: 1, title: "Гаррі Поттер", author: "Дж. К. Роулінг" },
        { id: 2, title: "Володар перснів", author: "Джон Рональд Руел Толкін"},
        { id: 3, title: "1984", author: "Джордж Орвелл" },
        { id: 4, title: "Доця", author: "Тамара Горіха Зерня"},
        { id: 5, title: "Усі вірші. 1993 – 2023", author: "Сергій Жадан"}
    ];
    return (
        <div style={{display: "flex", justifyContent: "center"}}>

        <table border="1" style={{ borderCollapse: "collapse", width: "50%"}}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Book title</th>
                <th>Author</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>
            ))}
            </tbody>
        </table>
</div>
    );
}

export default Table;