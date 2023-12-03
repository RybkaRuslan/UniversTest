import { StyledFooter, CopyrightText, Text, CircleIcon } from "./footer.styles";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <CopyrightText>
        <Text>2023 &copy; Все права защищены. Разработано специально для</Text>{" "}
        <CircleIcon
          src="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/186/7/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png"
          alt="Логотип"
        />
      </CopyrightText>
    </StyledFooter>
  );
};
