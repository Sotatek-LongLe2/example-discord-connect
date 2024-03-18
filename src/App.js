import { Box, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";
import { useDiscordLogin, UseDiscordLoginParams } from "react-discord-login";

const App = () => {
  const [token, setToken] = React.useState("");

  const discordLoginParams = {
    clientId: "1218133123238330441",
    redirectUri: "http://localhost:3000",
    responseType: "token", // or 'code'
    scopes: ["identify", "email"],
    onSuccess: (response) => {
      // Handle successful login
      console.log("Login successful:", response);
      setToken(response.access_token);
    },
    onFailure: (error) => {
      // Handle login failure
      console.error("Login failed:", error);
    },
  };

  const { buildUrl, isLoading } = useDiscordLogin(discordLoginParams);

  return (
    <div>
      <div>
        <div>Add Project</div>
        <div>Project Title</div>
        <Input placeholder="Please enter the project title" />
        <div>Project Introduction</div>
        <Input placeholder="Please enter the introduction for the project" />
        <div>-------------------------------</div>
        <div>Integrating Egg3 Slack bot</div>
        <div>
          You can generate images using the Midjourney model through the Slack
          Bot
        </div>
        <div>Integrate Egg3 Slack bot*</div>
        <button>Connect</button>
        <div>Select Slack Channel*</div>
        <div>Select from a list of channels without Answer Bot set up</div>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div>-------------------------------</div>
        <div>Are you currently logged into your Midjourney account?</div>
        <Flex gap={"40px"}>
          <Box width={"400px"}>
            <div>1. Discord web login</div>
            <div>
              Click the button below to navigate to Discord web and log in with
              your Discord account used for Midjourney
            </div>
            <button
              onClick={() => (window.location.href = buildUrl())}
              disabled={isLoading}
            >
              Sign in with Discord
            </button>
          </Box>
          <Box width={"400px"}>
            <div>2. Get Token</div>
            <div>
              To access the Discord Midjourney service, logging in will
              automatically grant you a token
            </div>
            <Input placeholder="" value={token} />
          </Box>
        </Flex>
        <Box marginTop={"40px"}>
          <button>Cancel</button>
          <button>Confirm</button>
        </Box>
      </div>
    </div>
  );
};

export default App;
