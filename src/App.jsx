import AdvImg1 from "./assets/adv-1.jpg";
import AdvImg2 from "./assets/adv-2.jpg";
import AdvImg3 from "./assets/adv-3.jpg";
import AdvImg4 from "./assets/adv-4.jpg";
import MainBotImg from "./assets/chatbot-main.jpg";
import {
  AdvantageCard,
  AdvantageCardImg,
  ButtonBox,
  ButtonTypography,
  CardBox,
  ColoredBox,
  EmailBox,
  Footer,
  FormRow,
  LogoTypography,
  MainBox,
  MainBoxImg,
  MainBoxText,
  MainTextTypography,
  SecondBox,
  SubTextTypography,
  ThirdBox,
} from "./styles";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

export const App = () => {
  return (
    <>
      <LogoTypography>AI SEC</LogoTypography>
      <MainBox>
        <MainBoxText>
          <MainTextTypography>
            Melhore a Experiência dos seus usuários com o Bot da
            <strong> AI SEC</strong>
          </MainTextTypography>

          <SubTextTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SubTextTypography>

          <ButtonBox href="/">
            <ButtonTypography>QUERO CONHECER O BOT DA AI SEC</ButtonTypography>
          </ButtonBox>
        </MainBoxText>

        <MainBoxImg>
          <Box
            width="100%"
            height="100%"
            sx={{
              backgroundImage: `url(${MainBotImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </MainBoxImg>
      </MainBox>

      <ColoredBox>
        <SecondBox>
          <CardBox>
            <Typography variant="h3">55%</Typography>
            <Typography variant="body">
              dos usuários tem suas dúvidas respondidas por ChatBots
            </Typography>
          </CardBox>
          <CardBox>
            <Typography variant="h3">40%</Typography>
            <Typography variant="body">
              dos usuários da internet preferem interagir com ChatBots
            </Typography>
          </CardBox>
          <CardBox>
            <Typography variant="h3">47%</Typography>
            <Typography variant="body">
              dos consumidores comprariam itens por meio do ChatBot
            </Typography>
          </CardBox>
        </SecondBox>
      </ColoredBox>

      <ThirdBox>
        <Typography
          variant="h3"
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "60px 10px 120px",
          }}
        >
          Veja algumas das vantagens dos ChatBots para o seu negócio.
        </Typography>
        <AdvantageCard sx={{ gridTemplateColumns: "1fr 2fr" }}>
          <AdvantageCardImg>
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: `url(${AdvImg1})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </AdvantageCardImg>
          <div>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              Conversas simples que resolvem situações complexas
            </Typography>
            <SubTextTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTextTypography>
          </div>
        </AdvantageCard>

        <AdvantageCard sx={{ gridTemplateColumns: "2fr 1fr" }}>
          <div>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              Atendimento humano mais estratégico
            </Typography>
            <SubTextTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTextTypography>
          </div>
          <AdvantageCardImg>
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: `url(${AdvImg2})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </AdvantageCardImg>
        </AdvantageCard>

        <AdvantageCard sx={{ gridTemplateColumns: "1fr 2fr" }}>
          <AdvantageCardImg>
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: `url(${AdvImg3})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </AdvantageCardImg>
          <div>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              Satisfação do seu cliente e usuário
            </Typography>
            <SubTextTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTextTypography>
          </div>
        </AdvantageCard>

        <AdvantageCard sx={{ gridTemplateColumns: "2fr 1fr" }}>
          <div>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              Prezamos a sua segurança e privacidade
            </Typography>
            <SubTextTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTextTypography>
          </div>
          <AdvantageCardImg>
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: `url(${AdvImg4})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </AdvantageCardImg>
        </AdvantageCard>
      </ThirdBox>

      <ColoredBox
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <EmailBox>
          <MainTextTypography>
            Só falta um passo para criar seu chatbot e revolucionar a
            comunicação do seu negócio!
          </MainTextTypography>
          <SubTextTypography>
            Preencha os dados abaixo para falar com o nosso time comercial assim
            que nosso produto estiver oficialmente lançado e ganhe um desconto
            especial de lançamento.
          </SubTextTypography>
        </EmailBox>

        <FormRow>
          <TextField label="Nome" defaultValue="" fullWidth />
          <TextField label="Sobrenome" defaultValue="" fullWidth />
        </FormRow>

        <FormRow>
          <TextField label="Email" defaultValue="" fullWidth />
          <TextField label="Celular" defaultValue="" fullWidth />
        </FormRow>

        <ButtonBox href="/" sx={{ margin: "50px 0", width: "auto" }}>
          <ButtonTypography>
            REVOLUCIONAR A COMUNICAÇÃO DA MINHA EMPRESA
          </ButtonTypography>
        </ButtonBox>
      </ColoredBox>

      <Footer>
        <div style={{ width: "400px", textAlign: "center" }}>
          <LogoTypography sx={{ color: "#C0C0C0", margin: "0", width: "100%" }}>
            AI SEC
          </LogoTypography>
          <Typography color="#C0C0C0" sx={{ fontSize: "10px", width: "100%" }}>
            Uma empresa DEDSEC
          </Typography>
        </div>
        <Typography color="#C0C0C0" sx={{ width: "400px" }}>
          R. Alfabeto, 123 - São Paulo - SP | 2022 © AI SEC
        </Typography>
      </Footer>
    </>
  );
};
