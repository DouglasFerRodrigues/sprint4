import styled from 'styled-components';

export const AreaHerader = styled.div`
  height: 60px;
  background-image: linear-gradient(to right, #fe5026, #370d44);
  color: #fff;
  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    .logo {
      flex: 1;
      img {
        width: 60px;
      }
    }
    nav {
      display: flex;
      ul {
        display: flex;
      }
      li {
        list-style: none;
        margin-left: 20px;
        a {
          text-decoration: none;
          color: #fff;
          &:hover {
            color: #f5bb00;
          }
        }
      }
      .avatar {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          border-radius: 20px;
          margin-left: 20px;
          margin-right: 10px;
          cursor: pointer;
        }
        label {
          fonte-size: 14px;
          cursor: pointer;
          color: #ccc;
        }
        @media screen and (max-width: 600px) {
          label {
            display: none;
          }
        }
      }
    }
  }
`;
