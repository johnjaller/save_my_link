import React,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge, Table, Container, Row, Col } from "reactstrap";
import AddUrl from "./AddUrlComponent";
import SearchComponent from "./SearchComponent";
export default function ListComponent (props) {
 
  const[bookmark,setBookmark]=useState(props.storage||[])
  const[query,setQuery]=useState('')
  const removeLink = (prop) => {
    console.log(prop.index);
    bookmark.splice(prop.index, 1);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmark(JSON.parse(localStorage.getItem('bookmark')))
  };

  const filterLink = (queryString) => {
    console.log(queryString);
    setQuery(queryString)
    let result = bookmark.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.url.toLowerCase().includes(query) ||
        item.tag
          .map((tagName) => tagName.toLowerCase().includes(query))
          .includes(true)
    );
    if (queryString === "") {
    setBookmark(JSON.parse(localStorage.getItem('bookmark')))
    } else {
      console.log(result);
      setBookmark(result)
    }
  };
  const addLink = (prop) => {
    console.log(prop);
    bookmark.push(prop);
    console.log(bookmark);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmark(JSON.parse(localStorage.getItem('bookmark')))
  };
  
    return (
      <div className="home">
        <h1>My private bookmark</h1>
        <SearchComponent search={filterLink} />
        <Container>
          <Row>
            <Col lg="2" className="addURLButton">
              <AddUrl addURL={addLink} />
            </Col>
            <Col lg="10">
              <Table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>URL</td>
                    <td>Tag</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {bookmark&&bookmark.length>0?bookmark.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.url}
                          </a>
                        </td>
                        {item.tag.length > 0 ? (
                          <td>
                            {item.tag.map((tagName, tagIndex) => {
                              return (
                                <Badge
                                  className="tag"
                                  key={tagIndex}
                                  color="primary"
                                  pill
                                >
                                  {tagName}
                                </Badge>
                              );
                            })}
                          </td>
                        ) : (
                          <td>no tag</td>
                        )}
                        <td>
                          <Button onClick={() =>removeLink({ index })}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  }):<p>There are no links yet</p>}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  
}
