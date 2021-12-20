import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FileTypes, SharePointfile } from '@/types';

interface DocIconProps {
  data: SharePointfile;
  theme: any;
}

const DocIcon = styled(FontAwesomeIcon)`
  ${({ data, theme }: DocIconProps) => {
    switch (data.type) {
      case FileTypes.FOLDER:
        if (data.isGallery) {
          return `
            font-size: 18px;
            color: ${theme.colors.galleryOrange};

            @media only screen and (min-width: 575px) {
              font-size: 36px;
            }
          `;
        } else {
          return `
            font-size: 18px;
            color: ${theme.colors.folderYellow};

            @media only screen and (min-width: 575px) {
              font-size: 36px;
            }
          `;
        }

      case FileTypes.PDF: return `
        font-size: 14px;
        color: ${theme.colors.pdfRed};

        @media only screen and (min-width: 575px) {
          font-size: 27px;
        }
      `;
      default: return `
        font-size: 14px;
        color: ${theme.colors.textDark};

        @media only screen and (min-width: 575px) {
          font-size: 27px;
        }
      `;
    }
  }}
`;

const SC = {
  DocIcon
};

export default SC;
