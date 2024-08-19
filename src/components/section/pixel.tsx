import { keyframes, styled } from "styled-components";
import { ReactNode } from "react";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 670px;
  background-color: #caf2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
    padding: 100px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 58px 0;
    gap: 45px;
  }
`;
// const MainContainer = styled.div`
//   max-width: 100vw;
//   height: 670px;
//   background-color: #caf2ff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: inset 0 3px 1px -1px #252525;

//   @media only screen and (max-width: 1279px) {
//     flex-direction: column;
//     height: fit-content;
//     padding: 100px 0;
//   }

//   @media only screen and (max-width: 768px) {
//     padding: 58px 0;
//     gap: 45px;
//   }
// `;

const ColorChange = keyframes`
 0% {
    background-color: #F8D467;
  }
17% {
    background-color: #F8D467;
  }
  19% {
    background-color: #9DC05A;
  }
  37% {
    background-color: #9DC05A;
  }
  39% {
    background-color: #FFDCF7;
  }
  57% {
    background-color: #FFDCF7;
  }
  59% {
    background-color: #CAF2FF;
  }
  77% {
    background-color: #CAF2FF;
  }
  79% {
    background-color: #D7F6CB;
  }
  97% {
    background-color: #D7F6CB;
  }
  100% {
    background-color: #F8D467;
  }`;
const Slide = styled.div`
  width: 430px;
  margin: 0;
  overflow: hidden;
  mask-image: url("carousel/mask.png");
  mask-repeat: no-repeat;
  margin-right: 90px;
  transition: all 0.2s;
  animation: ${ColorChange} 10s infinite;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 16px 0px #000);

  &:after {
    z-index: 1;
    position: absolute;
    content: "";
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    background: url("carousel/vector.png");
    background-repeat: no-repeat;
    background-position-x: -1px;

    @media (max-width: 640px) {
      background-size: 298px;
      background-position-x: -1px;
      background-position-y: -1px;
    }
  }

  @media (max-width: 1279px) {
    margin: 0;
  }

  @media (max-width: 640px) {
    width: 300px;
    mask-size: 300px;
  }
`;
const Sliding = keyframes`
  15% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-430px);
    }
    35% {
      transform: translateX(-430px);
    }
    40% {
      transform: translateX(-860px);
    }
    55% {
      transform: translateX(-860px);
    }
    60% {
      transform: translateX(-1290px);
    }
    75% {
      transform: translateX(-1290px);
    }
    80% {
      transform: translateX(-1720px);
    }
    95% {
      transform: translateX(-1720px);
    }
    100% {
      transform: translateX(0);
    }`;
const MiniSliding = keyframes`
    15% {
        transform: translateX(0);
      }
      20% {
        transform: translateX(-300px);
      }
      35% {
        transform: translateX(-300px);
      }
      40% {
        transform: translateX(-600px);
      }
      55% {
        transform: translateX(-600px);
      }
      60% {
        transform: translateX(-900px);
      }
      75% {
        transform: translateX(-900px);
      }
      80% {
        transform: translateX(-1200px);
      }
      95% {
        transform: translateX(-1200px);
      }
      100% {
        transform: translateX(0);
      }`;

const Carousel = styled.div`
  display: flex;
  width: 2150px;
  animation: ${Sliding} 10s infinite;

  @media (max-width: 640px) {
    width: 1500px;
    animation: ${MiniSliding} 10s infinite;
  }
`;
const CarouselLists = [
  { color: "#F8D467", img: "carousel/1.png" },
  { color: "#9DC05A", img: "carousel/2.png" },
  { color: "#FFDCF7", img: "carousel/3.png" },
  { color: "#CAF2FF", img: "carousel/4.png" },
  { color: "#D7F6CB", img: "carousel/5.png" },
];
// const Container = styled.div`
//   width: 710px;
//   display: flex;
//   flex-direction: column;
//   gap: 40px;

//   @media only screen and (max-width: 768px) {
//     width: calc(100vw - 36px);
//     gap: 16px;
//   }
// `;
const AvatarAnimBoard = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 640px) {
    width: 300px;
  }
`;

const Image = styled.img`
  @media screen and(max-width:640px) {
    width: 260px;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 553px;

  @media only screen and (max-width: 1279px) {
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% - 36px);
    gap: 18px;
  }
`;
const BtnMainContainer = styled.div<{ $style?: string }>`
  transition: 0.2s all;
  width: fit-content;

  filter: ${({ $style }) =>
    $style === "Logo"
      ? "drop-shadow(4px 4px 0px #000)"
      : "drop-shadow(0 4px 0px #000)"};

  @media only screen and (max-width: 640px) {
    justify-self: center;
    filter: ${({ $style }) =>
      $style === "Menu"
        ? "drop-shadow(4px 4px 0px #000)"
        : "drop-shadow(0 4px 0px #000)"};
  }

  &:hover {
    filter: ${({ $style }) =>
      $style === "Logo"
        ? "drop-shadow(2px 2px 0px #000)"
        : "drop-shadow(0 2px 0px #000)"};

    @media only screen and (max-width: 640px) {
      filter: ${({ $style }) =>
        $style === "Menu"
          ? "drop-shadow(2px 2px 0px #000)"
          : "drop-shadow(0 2px 0px #000)"};
    }
  }

  &:active {
    filter: ${({ $style }) =>
      $style === "Logo"
        ? "drop-shadow(0 0 0 #000)"
        : "drop-shadow(0 0 0 #000)"};

    @media only screen and (max-width: 640px) {
      filter: ${({ $style }) =>
        $style === "Menu"
          ? "drop-shadow(0 0 0 #000)"
          : "drop-shadow(0 0 0 #000)"};
    }
  }
`;
export const Subtitle = styled.h2`
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
`;
const Title = styled.h2`
  margin: 0;
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 76px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;
export const LearnButton = styled.div`
  color: #252525;
  font-family: Bebas Neue;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  padding: 14px 30px;
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: white;
  width: fit-content;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #f8d467;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
  }
`;
const Button = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: string;
}) => {
  return <BtnMainContainer $style={style}>{children}</BtnMainContainer>;
};

export const Pixel = () => {
  return (
    <MainContainer>
      {/* <Container> */}
      <Slide>
        <Carousel>
          {CarouselLists.map((data, index) => (
            <AvatarAnimBoard key={index}>
              <Image src={data.img} />
            </AvatarAnimBoard>
          ))}
        </Carousel>
      </Slide>
      <RightSide>
        <Title>Pixel-by-pixel</Title>
        <Subtitle>
          Our 3D art is a testament to craftsmanship and dedication. We didn't
          rely on artificial intelligence; instead, every pixel was meticulously
          hand-drawn with care and precision, one cursor click at a time.
          <br />
          <br />
          Countless hours were poured into crafting each detail, ensuring that
          every Kiki Koala in the Kiki Kollective capture the labour of love.
        </Subtitle>
        <div>
          <Button>
            <LearnButton>learn about the art</LearnButton>
          </Button>
        </div>
      </RightSide>
      {/* </Container> */}
    </MainContainer>
  );
};
