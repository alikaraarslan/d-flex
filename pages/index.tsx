import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { data } from '../assets/data.js';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const SidebarWraper = styled.div`
  width: 25%;
  border-right: 4px solid #f55353;
  padding: 0 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    margin: 5px 0 10px;
  }
`;
const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    background: #f55353;
    color: white;
    :disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  .val {
    min-width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
const PropertyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  p {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      width: 100%;
      margin: 10px 0 5px;
    }
  }
  .items {
    padding: 2px 8px;
    span {
      display: block;
      font-size: 16px;
      font-weight: 700;
      margin-top: 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li {
        padding: 5px 10px;
        display: flex;
        label {
          display: flex;
          align-items: center;
          gap: 6px;
          input {
            margin-top: 2px;
          }
        }
      }
    }
  }
`;
const BoxWraper = styled.div`
  width: 75%;
  padding: 15px;
  display: flex;
  gap: 4px;
  .box-item {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    background: #f55353;
    border: 4px solid #06113c;
    color: #06113c;
    font-weight: 600;
  }
`;

const Home: NextPage = () => {
  const [divCount, setDivCount] = useState(4);
  const [initialVal, setInitivalVal] = useState({});
  useEffect(() => {
    const a = data.map((m) => ({
      value: m.value,
      item: m.items[0],
    }));
    setInitivalVal(a);
  }, []);

  const divList = () => {
    const rowList = [];
    for (let i = 0; i < divCount; i++) {
      rowList.push(
        <div className="box-item" key={i + 1}>
          {i + 1}
        </div>
      );
    }
    return rowList;
  };

  return (
    <>
      <HomeWrapper>
        <SidebarWraper>
          <h3>CSS FLEXBOX HELPER</h3>
          <p>You can learn how to use the flex system.</p>
          <CountWrapper>
            <button
              onClick={() => setDivCount(divCount - 1)}
              disabled={divCount === 1}
              className="btn btn-minus"
            >
              -
            </button>
            <div className="val">{divCount}</div>
            <button
              onClick={() => setDivCount(divCount + 1)}
              className="btn btn-plus"
            >
              +
            </button>
          </CountWrapper>
          <PropertyWrapper>
            {data.map((item, index) => (
              <div key={index} className="items">
                <span>{item.title}</span>
                <ul>
                  {item.items.map((itm, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          defaultChecked={index === 0}
                          id={itm}
                          name={`${item.title.replace(' ', '')}`}
                          value={itm}
                          onChange={(e) => {
                            const selectedItem = data.filter(
                              (f) => f.value === item.value
                            )[0];
                            if (Array.isArray(initialVal)) {
                              setInitivalVal(
                                initialVal.map((m) => {
                                  if (m.value === item.value) {
                                    return {
                                      value: m.value,
                                      item: e.target.checked ? itm : '',
                                    };
                                  }
                                  return m;
                                })
                              );
                            }
                            console.log('-->', selectedItem);
                          }}
                        />
                        {itm}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </PropertyWrapper>
        </SidebarWraper>
        <BoxWraper>
          <>
            {divList()}
            <pre>
              Result <br />
              {JSON.stringify(initialVal, null, 2)}
            </pre>
          </>
        </BoxWraper>
      </HomeWrapper>
    </>
  );
};

export default Home;
