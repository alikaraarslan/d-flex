import type { NextPage } from 'next';
import { data } from '../assets/data.js';
import styled from 'styled-components';
import { useState } from 'react';

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const SidebarWraper = styled.div`
  width: 25%;
  border-right: 4px solid #e94560;
  padding: 2% 20px 0 20px;
  text-align: center;
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
    background: #e94560;
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
  }
`;
const BoxWraper = styled.div`
  width: 75%;
`;

const Home: NextPage = () => {
  console.log('data', data);
  const [val, setVal] = useState(1);
  return (
    <HomeWrapper>
      <SidebarWraper>
        <h3>CSS FLEXBOX HELPER</h3>
        <p>You can learn how to use the flex system.</p>
        <CountWrapper>
          <button
            onClick={() => setVal(val - 1)}
            disabled={val === 1}
            className="btn btn-minus"
          >
            -
          </button>
          <div className="val">{val}</div>
          <button onClick={() => setVal(val + 1)} className="btn btn-plus">
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
                        id={itm}
                        name={`${item.title.replace(' ', '')}`}
                        value={itm}
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
      <BoxWraper>Box</BoxWraper>
    </HomeWrapper>
  );
};

export default Home;
