// @ts-nocheck
import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import { data } from '../assets/data.js';
import styled from 'styled-components';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { CopyBlock, vs2015 } from 'react-code-blocks';

import bg from '../assets/bg.jpg';
import isMobile from '../utils/isMobile';

import Icon from '../components/Icon';
import Link from 'next/link';

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SidebarWraper = styled.div`
  width: 25%;
  border-right: 4px solid #95a3b6;
  padding: 15px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 5px 0 10px;
  }
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    border: none;
  }
`;

const ProjectInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 15px;
  a {
    svg {
      width: 24px;
      height: auto;
    }
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
    background: #222a30;
    color: #ffffff;
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
      display: flex;
      font-size: 16px;
      font-weight: 700;
      margin-top: 20px;
      justify-content: center;
      align-items: center;
      height: 30px;
      gap: 5px;
      line-height: 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 240px;
  }
  .box-item {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    background: #95a3b6;
    border: 4px solid #222a30;
    color: #222a30;
    font-weight: 600;
    border-radius: 10px;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  gap: 4px;
  height: 80%;
  width: 80%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.25);
`;

const Home: NextPage = () => {
  const [divCount, setDivCount] = useState(4);
  const [initialVal, setInitivalVal] = useState({});
  const [result, setResult] = useState({});
  const containerRef = useRef<any>(null);
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

  useEffect(() => {
    if (Array.isArray(initialVal) && containerRef?.current) {
      initialVal.forEach((m) => {
        containerRef.current.style[m.value] = m.item;
      });
      setResult(
        initialVal.reduce((acc, cur) => {
          acc[cur.value] = cur.item;
          return acc;
        }, {})
      );
    }
  }, [initialVal]);

  let resultCss = Object.keys(result).reduce((acc, cur) => {
    acc += `${cur}: ${result[cur]};\n`;
    return acc;
  }, '');
  resultCss = 'display: flex;\n' + resultCss;

  const toKebabCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  useEffect(() => {
    if (isMobile.any()) {
      setDivCount(2);
    }
  }, []);

  return (
    <>
      <HomeWrapper
        style={{
          background: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
        }}
      >
        <SidebarWraper>
          <div>
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
                  <span>
                    {item.title}
                    <Tooltip
                      placement="top"
                      overlay={
                        <span
                          style={{
                            maxWidth: '200px',
                            display: 'block',
                            textAlign: 'center',
                            fontSize: '14px',
                          }}
                        >
                          {item.description}
                        </span>
                      }
                    >
                      <a style={{ cursor: 'pointer' }}>
                        <Icon name="question" />
                      </a>
                    </Tooltip>
                  </span>
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
          </div>
          <div>
            <div>
              <CopyBlock
                text={toKebabCase(resultCss)}
                language={'css'}
                showLineNumbers={false}
                theme={vs2015}
                customStyle={{
                  boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                  textAlign: 'left',
                  padding: '12px',
                  display: 'flex',
                }}
              />
            </div>
            <ProjectInfoWrapper>
              <Link href={'https://github.com/alikaraarslan/d-flex'}>
                <a target="_blank" title="Github Repository">
                  <Icon name="github" />
                </a>
              </Link>
              <Link
                href={'https://www.linkedin.com/in/ali-karaarslan-392416127/'}
              >
                <a target="_blank" title="Code Owner">
                  <Icon name="linkedin" />
                </a>
              </Link>
            </ProjectInfoWrapper>
          </div>
        </SidebarWraper>
        <BoxWraper>
          <SubWrapper ref={containerRef}>{divList()}</SubWrapper>
        </BoxWraper>
      </HomeWrapper>
    </>
  );
};

export default Home;
