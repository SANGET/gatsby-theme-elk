import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
// import { Icon } from 'ukelli-ui/core/icon';
import { ToolTip } from 'ukelli-ui/core/tooltip';

const Footer = ({ title }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          title
          description
          siteUrl
          footer {
            showBuildInfo
            since
          }
          social {
            github
            mail
          }
        }
      }
    }
  `);
  const siteMetadata = data.site.siteMetadata;
  const footerData = siteMetadata.footer;
  const { github, mail } = siteMetadata.social;
  const { showBuildInfo = true, since } = footerData;
  return (
    <footer className="footer">
      <div className="container">
        <div className="layout">
          <span>© {since ? since + ' ' : ''}{new Date().getFullYear()} {title}</span>
          {
            showBuildInfo && (
              <>
                <span> - build with </span>
                <a href="https://www.gatsbyjs.org/"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">Gatsby</a>,
                <a href="https://github.com/SANGET/gatsby-theme-elk"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">Gatsby Theme Elk</a>,
                <a href="https://ui.ukelli.com"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">Ukelli UI</a>
              </>
            )
          }
          <span className="flex"></span>
          {
            github && (
              <a href={github}
                rel="noopener noreferrer"
                className="ms5" target="_blank">
                <ToolTip
                  // position="right"
                  n="github" s="b" title="Github" />
                {/* <Icon n="github" s="b" /> */}
              </a>
            )
          }
          {
            mail && (
              <a href="mailto:zh.sanget@gmail.com" target="_top">
                <ToolTip
                  // position="right"
                  n="envelope" s="r" title="zh.sanget@gmail.com" />
                {/* <Icon n="envelope" s="r" /> */}
              </a>
            )
          }
        </div>
        <div className="contact">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
