
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 40vw;
  max-height: 50vw;
`;
// import BlockQuote from './Blockquote';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // console.log('asdfasdfa', node);
      const { title, description, file } = node.data.target.fields; // contentful takes around 20 mins to load asset
      const mimeType = file['en-US'].contentType;
      const mimeGroup = mimeType.split('/')[0];

      switch (mimeGroup) {
        case 'image':
          return (
            <StyledImage
              title={title ? title['en-US'] : null}
              alt={description ? description['en-US'] : null}
              src={file['en-US'].url}
            />
          );
        case 'video':
          return (
            <video src={file['en-US'].url} type="video/mp4" controls>
              <p>Your browser does not support HTML5 video.</p>
            </video>
          );
        case 'application':
          return (
            <a
              alt={description ? description['en-US'] : null}
              href={file['en-US'].url}
            >
              { title ? title['en-US'] : file['en-US'].details.fileName }
            </a>
          );
        default:
          return (
            <span style={{ backgroundColor: 'red', color: 'white' }}>
              {' '}
              {mimeType}
              {' '}
              embedded asset
              {' '}
            </span>
          );
      }
    },
  },
};

const ContentfulRichText = (text) => documentToReactComponents(text, richTextOptions);

export default ContentfulRichText;
