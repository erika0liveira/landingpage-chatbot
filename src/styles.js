import { styled } from "@mui/system";
import { Box, Typography, Card } from "@mui/material";

export const LogoTypography = styled(Typography)(({ theme }) => ({
  width: "80vw",
  margin: "40px auto 60px",
  fontFamily: `'Allerta Stencil', sans-serif`,
  fontSize: "3rem",
}));

export const MainBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "80vw",
  margin: "0 auto",
}));

export const MainBoxText = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  textAlign: "center",
  padding: "30px",
}));

export const MainTextTypography = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "2rem",
  marginBottom: "20px",
}));

export const SubTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: "40px",
}));

export const MainBoxImg = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "800px",
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  width: "300px",
  padding: "20px 30px",
  margin: "0 auto",
  backgroundColor: "#30503A",
  border: "solid 1px #30503A",
  borderRadius: "10px",
  cursor: "pointer",
}));

export const ButtonTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#FCFCFC",
}));

export const ColoredBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#DFF0E2",
  marginTop: "40px",
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
  placeItems: "center",
  width: "80vw",
  height: "200px",
  margin: "0 auto",
  padding: "40px",
}));

export const CardBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gap: "20px",
  justifyContent: "center",
  justifyItems: "center",
  textAlign: "center",
  width: "60%",
  height: "fit-content",
  maxHeight: "200px",
  borderRadius: "4px",
}));

export const ThirdBox = styled(Box)(({ theme }) => ({
  width: "70vw",
  margin: "0 auto",
}));

export const AdvantageCard = styled(Box)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  marginBottom: "40px",
}));

export const AdvantageCardImg = styled(Box)(({ theme }) => ({
  width: "600px",
  height: "400px",
  placeSelf: "center",
}));

export const EmailBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  textAlign: "center",
  width: "80vw",
  padding: "40px 0 20px",
  gap: "40px",
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  width: "80vw",
  margin: "0 auto",
}));

export const Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "150px",
  padding: "0 60px",
  backgroundColor: "#081d34",
}));
