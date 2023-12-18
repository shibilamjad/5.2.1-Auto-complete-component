import "./SearchList.css";

export function SearchList({ filterd, feildInput }) {
  return (
    <div className="searchList-box-container">
      <div className="style-searchList">
        {!feildInput ? (
          <p className="items-not">Items not fetched..❌</p>
        ) : (
          <div className="searchList-box">
            {filterd.map((items) => (
              <div className="searchList-box" key={items.id}>
                <ul>
                  <li>{items.title}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
