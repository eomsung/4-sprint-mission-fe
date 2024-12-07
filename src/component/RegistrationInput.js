import { useEffect, useState } from "react";
import "./RegistrationInput.css";
import { useAsync } from "../hook/useAsync";

const INITAIL_FORMDATA = {
  name: "",
  description: "",
  price: "",
  tag: "",
};
//tags도 하나 만들까? [] 이걸로 만들어서 유효성검사를 다시 해볼까?
//tag를 onchange관련했을때는 글자수 체크하고 엔터 눌렀을때 tag가 될수있는지 체크
//만약 ok이면 tag="" 으로 바꾸고 tags에 추가
//tags에 값이 없으면 버튼 클릭 불가능

export const RegistrationInput = ({ onSubmit }) => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState(INITAIL_FORMDATA);
  const [invalidMessage, setInvalidMessage] = useState(INITAIL_FORMDATA);

  const [loading, error, onSubmitAsync] = useAsync(onSubmit);

  useEffect(() => {
    isValid();
  }, [formData]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    // 글자가 없거나 모자르게 입력했는데 blur 했을때 함수
    const { name, value } = e.target;
    if (name === "name" || name === "tag") {
      if (value.length === 0) {
        setInvalidMessage((prev) => ({
          ...prev,
          [name]: "글자를 입력해주세요",
        }));
      }
    } else if (name === "description") {
      if (value.length < 10) {
        setInvalidMessage((prev) => ({
          ...prev,
          [name]: "10자 이상 입력해주세요",
        }));
      }
    } else if (name === "price") {
      if (value.length === 0) {
        setInvalidMessage((prev) => ({
          ...prev,
          [name]: "숫자를 입력해주세요",
        }));
      }
    }
  };

  const isValid = () => {
    let vaild = true;
    let newMessage = { ...invalidMessage };
    if (formData.name.length < 1 || formData.name.length > 10) {
      if (formData.name.length > 10) {
        newMessage.name = "10자 이내로 입력해주세요";
      }

      vaild = false;
    } else {
      newMessage.name = "";
    }
    if (formData.description.length < 10 || formData.description.length > 100) {
      if (formData.description.length > 100) {
        newMessage.description = "100자 이내로 입력해주세요";
      }

      vaild = false;
    } else {
      newMessage.description = "";
    }
    if (!Number.isInteger(Number(formData.price))) {
      if (
        !Number.isInteger(Number(formData.price)) &&
        formData.price.length !== 0
      ) {
        newMessage.price = "숫자를 입력해주세요 test";
      }
      vaild = false;
    } else {
      newMessage.price = "";
    }
    if (formData.tag.length < 1 || formData.tag.length > 5) {
      if (formData.tag.length > 5) {
        newMessage.tag = "5자 이내로 입력해주세요";
      }
      vaild = false;
    } else {
      newMessage.tag = "";
    }

    setIsActive(vaild);
    setInvalidMessage(newMessage);
  };

  // const reset = () => {
  //   setFormData(INITAIL_FORMDATA);
  //   setInvalidMessage(INITAIL_FORMDATA);
  // }; 아직 이게 필요할지 잘 모르지만 까먹을거 같아서 작성

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormdata = { ...formData };
    const result = await onSubmitAsync(newFormdata);
    //만약에 result가 성공적이면 페이지 이동 코드 추가 작성하기
  };

  return (
    <div className="registrationSection">
      <form className="registrationContainer">
        <div className="buttonSection">
          상품등록하기
          <button
            disabled={!isActive && loading}
            className="button"
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>
        <div className="inputContainer">
          <div>
            <p>상품명</p>
            <input
              className={`menuInput ${invalidMessage.name ? "red" : ""}`}
              placeholder="상품명을 입력해주세요"
              name="name"
              value={formData.name}
              onChange={handleValueChange}
              onBlur={handleBlur}
            ></input>
            {invalidMessage.name && (
              <p className="errorMessage">{invalidMessage.name}</p>
            )}
          </div>
          <div>
            <p>상품 소개</p>
            <textarea
              className={`menuInput textarea ${
                invalidMessage.description ? "red" : ""
              }`}
              placeholder="상품 소개를 입력해주세요"
              name="description"
              value={formData.description}
              onChange={handleValueChange}
              onBlur={handleBlur}
            ></textarea>
            {invalidMessage.description && (
              <p className="errorMessage">{invalidMessage.description}</p>
            )}
          </div>
          <div>
            <p>판매가격</p>
            <input
              className={`menuInput ${invalidMessage.price ? "red" : ""}`}
              placeholder="판매 가격을 입력해주세요"
              name="price"
              value={formData.price}
              onChange={handleValueChange}
              onBlur={handleBlur}
            ></input>
            <p className="errorMessage">{invalidMessage.price}</p>
          </div>
          <div>
            <p>태그</p>
            <input
              className={`menuInput ${invalidMessage.tag ? "red" : ""}`}
              placeholder="태그를 입력해주세요"
              name="tag"
              value={formData.tag}
              onChange={handleValueChange}
              onBlur={handleBlur}
            ></input>
            <p className="errorMessage">{invalidMessage.tag}</p>
          </div>
        </div>
        {error?.message && <div>{error.message}</div>}
      </form>
    </div>
  );
};
