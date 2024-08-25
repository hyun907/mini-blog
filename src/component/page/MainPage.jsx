import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    margin-bottom: 16px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MainPage(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 검색어에 따라 posts 필터링
  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <TextInput
            height={20}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="검색어를 입력하세요..."
          />
        </SearchWrapper>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={filteredPosts}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
