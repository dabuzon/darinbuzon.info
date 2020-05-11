import React, { Component } from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { get as _get } from 'lodash';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      footer: allContentfulLabeledParagraph {
        nodes {
          title
          contentType
          copy {
            json
          }
        }
      }
    }
  `);

  const foot = () => {
    if ((props.pageType = 'Index')) {
      return <Link>Scroll to top</Link>;
    } else if ((props.pageType = 'Entry')) {
      return <Link>Next</Link>;
    }
  };

  console.log(data.footer.nodes);

  let pageTop;
  if (props.pageType) {
    pageTop = data.footer.nodes.map((edge) => {
      return (
        <div>
          <div>{edge.title}</div>
          <div>{documentToReactComponents(edge.copy.json)}</div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className={styles.container}>
        <header>
          <p>
            <Link>{props.title}</Link>
          </p>
          <p>
            <Link>{props.pathReturn}</Link>
          </p>
        </header>
        {props.children}
        {props.pageType ? (
          <footer>
            <div>{pageTop}</div>
            <div>
              <p>
                <Link>Return</Link>
              </p>
              <p>{foot}</p>
            </div>
          </footer>
        ) : (
          <footer>
            <p>
              <Link>Return</Link>
            </p>
            <p>{foot}</p>
          </footer>
        )}
      </div>
    </React.Fragment>
  );
};

// export class la extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       title: props.title,
//       pathReturn: props.pathReturn,
//       footerType: _get(props, ['data', 'footer', 'nodes']),
//       foot: () => {
//         if ((props.pageType = 'Index')) {
//           return <Link>Scroll to top</Link>;
//         } else if ((props.pageType = 'Entry')) {
//           return <Link>Next</Link>;
//         }
//       },
//    };
//   }

//   render() {
//     console.log(this.props.pageType);
//     let pageTop;
//     if (this.props.pageType) {
//       pageTop = this.state.footerType.map((edge) => {
//         return (
//           <div>
//             <div>{edge.title}</div>
//             <div>{documentToReactComponents(edge.copy.json)}</div>
//           </div>
//         );
//       });
//     }
//     return (
//       <React.Fragment>
//         <GlobalStyle />
//         <div className={styles.container}>
//           <header>
//             <p>
//               <Link>{this.props.title}</Link>
//             </p>
//             <p>
//               <Link>{this.props.pathReturn}</Link>
//             </p>
//           </header>
//           {this.props.children}
//           {
//             (this.props.pageType ? (
//               <footer>
//                 <div>{pageTop}</div>
//                 <div>
//                   <p>
//                     <Link>Return</Link>
//                   </p>
//                   <p>{this.state.foot}</p>
//                 </div>
//               </footer>
//             ) : (
//               <footer>
//                 <p>
//                   <Link>Return</Link>
//                 </p>
//                 <p>{this.state.foot}</p>
//               </footer>
//             ))
//           }
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export const query = graphql`
//   query {
//     footer: allContentfulLabeledParagraph {
//       nodes {
//         title
//         contentType
//         copy {
//           json
//         }
//       }
//     }
//   }
// `;

export default Layout;
