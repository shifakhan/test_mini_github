import * as React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export const Login = () => {
  return (
    <Container className="login">
      <Link rel="nofollow" data-method="post" href="/users/auth/github">
        <Button variant="contained" color="primary">
          Sign in with GitHub
        </Button>
      </Link>
    </Container>
  );
};
