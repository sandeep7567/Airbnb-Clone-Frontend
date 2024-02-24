import Container from "../ui/container";

export const AppFooter = () => {
  return (
    <div className="mt-0 text-muted-foreground py-12">
      <Container>
        <footer className="">
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1: Logo and site links */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Company</h2>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Policies</a>
                  </li>
                </ul>
              </div>
              {/* Column 2: Discover */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Discover</h2>
                <ul>
                  <li>
                    <a href="#">Trust & Safety</a>
                  </li>
                  <li>
                    <a href="#">Travel Credit</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                  <li>
                    <a href="#">Airbnb Citizen</a>
                  </li>
                </ul>
              </div>
              {/* Column 3: Host */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Host</h2>
                <ul>
                  <li>
                    <a href="#">Host your home</a>
                  </li>
                  <li>
                    <a href="#">Host an experience</a>
                  </li>
                  <li>
                    <a href="#">Responsible hosting</a>
                  </li>
                </ul>
              </div>
              {/* Column 4: Legal and social */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Legal & Social</h2>
                <ul>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};
