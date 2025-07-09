export default function handler(req, res) {
  const { buttonIndex } = req.body.untrustedData || {};

  let message = "Select a memecoin:";
  if (buttonIndex === 1) {
    message = "DOGE on Base = $0.12";
  } else if (buttonIndex === 2) {
    message = "PEPE on Base = $0.0000011";
  }

  res.status(200).json({
    frames: [
      {
        image: "https://farcaster-bot-dun.vercel.app/preview.png",
        text: message,
        buttons: ["Check DOGE", "Check PEPE"]
      }
    ]
  });
}
