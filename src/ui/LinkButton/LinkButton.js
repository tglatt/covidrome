import NextLink from "next/link";
import { withRouter } from "next/router";
import React from "react";
import { Link as RebassLink } from "rebass";
import { LinkButtonStyle } from "./style";

const LinkButton = ({ router, ...props }) => {
  const isActive = router && router.pathname === props.href;
  return (
    <NextLink as={props.asLink} href={props.disabled ? "" : props.href}>
      <RebassLink
        href={props.disabled ? "" : props.href}
        sx={LinkButtonStyle(isActive, props.disabled)}
        {...props}
      >
        {props.children}
      </RebassLink>
    </NextLink>
  );
};

const routed = withRouter(LinkButton);

export { routed as LinkButton };
