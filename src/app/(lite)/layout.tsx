import { FC } from "react";

const RootLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <html lang="en">
    <div className="container px-2.5">{children}</div>
  </html>
);

export default RootLayout;
