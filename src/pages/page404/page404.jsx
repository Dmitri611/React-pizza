import Button from "components/button/button";
import Section from "components/section/section";
import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Section className="section__inner--size-s" title="error 404">
      <p>Вселенная против, чтобы ты заходил сюда!</p>
      <Link to="/">
        <Button className="button--size-m" text="На главную" />
      </Link>
    </Section>
  );
};

export default Page404;
