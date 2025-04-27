import { Helmet } from "react-helmet-async";

const Title = ({
  title = "ChatWapp",
  description = "this is the chat app called ChatWapp",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
