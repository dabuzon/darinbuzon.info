import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html, body { 
  margin: 0;
  height: 100%;
  font-family: 'Times New Roman', Times, serif;
}

a {
  color: black;
  text-decoration: none;
  &:hover {
    color: #fe5000;
  }
}

p, a.footlink {
  font-size: 1vw;
  line-height: 1.2vw;
}

h1, .entry {
  font-weight: normal;
  font-size: 4.5vw;
  line-height: 4.75vw;
  padding: 30px 0 4vw 0;
}

a.entry {
  grid-column: 1/10;
}

.gridContainer {
  display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-gap: 40px;

    .caption {
      grid-column: 3/6;
      font-size: 0.7vw;
      color: #999;
      margin-top: 5px;
    }

    .indent {
      grid-column: 2/-1;
    }

    div {
      grid-column: 1/-1;
    }

    .labeledpara {
  grid-column: 7/11;
  .theContent {
    margin-bottom: 35px;
  }
  }
}

.pills {
    display: inline-block;
    padding: 8px 20px;
    border: 1px solid;
    border-radius: 100px;
    margin: 0 4px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .pills:first-child {
    margin: 0 4px 0 0;
    background-color: black;
    color: white;
  }

  @media (max-width: 1440px) {
    .gridContainer .caption {
      font-size: 12px;
    }

    p, a.footlink {
      font-size: 16px;
      line-height: 20px;
    }

    h1, .entry {
      font-size: 72px;
      line-height: 78px;
    }

    a.entry {
      grid-column: 1/11;
    }

    .pills {
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
  .pills {
    font-size: 10px;
    padding: 6px 16px;
    }

    .gridContainer {
      .labeledpara {
        grid-column: 6/12;

      }
    }
  }

  @media (max-width: 900px) {
    .gridContainer {
      display: flex;
      flex-direction: column;

      .labeledpara {
        .theContent {
         margin-bottom: 15px;
  }
  }
    }

    h1, .entry {
      font-size: 50px;
      line-height: 56px;
      padding: 30px 0 40px 0;
    }
  }
`;

export default Style;
