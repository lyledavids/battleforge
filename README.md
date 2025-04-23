1. Project Overview & Value Proposition



Triad’s BattleForge is a 3v3 play-to-earn (P2E) MOBA game inspired by League of Legends’ Twisted Treeline, built on the Nero blockchain. Set in a mythical arena, players control unique champions, battling in fast-paced, strategic matches to earn $FORGE tokens and rare NFTs. An integrated NFT marketplace allows players to trade, upgrade, and customize champions with unique skins, abilities, and stat boosts, creating a dynamic player-driven economy. By leveraging Nero’s Account Abstraction (AA) and Paymaster features, BattleForge delivers a frictionless, Web2-like experience, making blockchain gaming accessible to crypto natives and newcomers alike.

Value Proposition: BattleForge combines the addictive gameplay of a MOBA with GameFi’s financial incentives, empowering players to own, trade, and monetize in-game assets. Nero’s AA and Paymaster ensure gasless, intuitive interactions, lowering barriers for non-crypto users (e.g., traditional gamers, younger audiences) while fostering a vibrant ecosystem of creators and traders.



2. AA Integration Vision



Triad’s BattleForge leverages Nero’s Account Abstraction (AA) and Paymaster system to create a seamless, inclusive gaming experience, abstracting blockchain complexities for players. 



Here’s how we integrate these features:

Account Abstraction via UserOp SDK:

Players use AA-powered smart contract wallets, eliminating the need for private key management. New users onboard with a single click, creating a wallet via social logins (e.g., Google, Discord) or email, mimicking Web2 gaming UX.

Smart wallets enable programmable transactions, such as batching in-game actions (e.g., purchasing an NFT upgrade and equipping it in one click) without multiple confirmations.

Custom logic in wallets allows automatic token staking for passive rewards, enhancing player retention without requiring DeFi knowledge.



Paymaster Integration 

Type 0 (Sponsored Transactions): BattleForge sponsors gas fees for critical actions, such as onboarding new players, joining matches, and claiming achievement-based $FORGE tokens. This removes cost barriers, especially for non-crypto natives or younger gamers, ensuring a frictionless entry.

Type 1 & 2 (ERC20 Gas Payments): Players can pay gas fees with $FORGE tokens earned in-game, rather than needing native $NERO. For example, buying an NFT upgrade or listing an item on the marketplace uses $FORGE, streamlining transactions and reinforcing the token’s utility.

Paymaster API: The Paymaster API validates and signs UserOps, applying gas strategies to optimize costs (e.g., prioritizing low-cost periods). It also enables dynamic fee sponsorship based on player activity (e.g., free transactions for top-ranked players), incentivizing engagement.



Technical Implementation:

Using Nero’s simple-nero-template, we deploy NFT contracts for champions and upgrades, integrated with Paymaster for gasless minting and trading.

The UserOp SDK handles wallet interactions, ensuring secure, programmable transactions.

Smart contracts manage match outcomes, token rewards, and marketplace trades, with AA enabling flexible rules (e.g., multi-signature approvals for high-value NFT trades).

This integration ensures BattleForge feels like a traditional MOBA while delivering Web3’s ownership and earning potential, aligning with Nero’s mission to make blockchain invisible to users.



3. Clarity & Structure: User Flow and Architecture



User Flow

Onboarding:

Players visit the BattleForge dApp, sign up via social login, and receive an AA wallet (no seed phrase required).

Initial matches are gas-free (Type 0 Paymaster), letting players try the game without crypto knowledge.

Gameplay:

Players select a champion (NFT-based) and compete in 3v3 matches, earning $FORGE tokens for kills, objectives, and wins.

Achievements (e.g., “10-match win streak”) unlock rare NFTs or token bonuses, recorded on-chain.

NFT Marketplace:

Players access the in-dApp marketplace to buy, sell, or trade champion skins, ability upgrades, or stat boosts (NFTs).

Transactions use $FORGE for gas (Type 1/2 Paymaster) or are sponsored for new users (Type 0).

Upgrades enhance champion performance (e.g., +10% damage), creating strategic depth.



High-Level Architecture

Frontend: React-based dApp using open-source Nero templates, integrating with AA wallets via UserOp SDK for seamless UX.

Backend: Node.js server for matchmaking and game logic, interfacing with Nero blockchain via Web3.js.

Smart Contracts:

ChampionNFT.sol: ERC-721 contract for champions and upgrades, with metadata for visuals and stats.

Marketplace.sol: Handles NFT trading, with Paymaster integration for gasless or $FORGE-based fees.

Reward.sol: Distributes $FORGE based on match outcomes and achievements, using AA for batch processing.

Nero Blockchain: Stores NFT ownership, token balances, and match data, with Paymaster API optimizing transaction costs.

Off-Chain: Unity-based game engine for 3D MOBA gameplay, synced with on-chain assets via APIs.

Diagram (Conceptual):



[Player] -> [React dApp] -> [AA Wallet (UserOp SDK)]

                        ↘ [Paymaster API (Type 0/1/2)]

                           ↘ [Nero Blockchain]

                              ↘ [Smart Contracts: NFT, Marketplace, Rewards]

[Unity Game Engine] ↔ [Node.js Server] ↔ [Blockchain APIs]



This structure ensures scalability, security, and a Web2-like experience, with Nero’s AA and Paymaster as the backbone.





4. Innovation & Relevance

Innovation:

BattleForge reimagines Twisted Treeline as a P2E MOBA, blending fast-paced 3v3 gameplay with GameFi’s ownership model. Unlike existing GameFi projects (e.g., Axie Infinity), it prioritizes competitive, skill-based mechanics over grind-heavy P2E, appealing to traditional MOBA fans.



The NFT marketplace introduces “upgradeable champions,” where players dynamically enhance abilities (e.g., new spells) or stats, creating a meta-strategy layer unique to GameFi MOBAs.

AA-driven social logins and gasless onboarding innovate by making Web3 gaming as accessible as downloading a mobile game.



Relevance:

Aligns with WaveHack’s GameFi theme, leveraging Nero’s AA to bridge Web2 and Web3 gaming.

Draws inspiration from successful MOBAs (e.g., League of Legends, 150M+ players) and GameFi projects (e.g., Gala Games), but differentiates with Nero’s scalable, low-cost infrastructure and inclusive UX.



5. User Impact & Simplicity

Target Audience: Traditional gamers (18–35), MOBA enthusiasts, and crypto-curious newcomers. The AA-powered UX targets non-crypto natives, including younger players or those intimidated by wallets and gas fees.

Simplicity: Social logins, gasless onboarding, and $FORGE-based transactions remove Web3 friction. The game’s intuitive MOBA mechanics (move, attack, cast spells) are familiar to millions, while NFT upgrades are presented as “gear” to simplify the concept.

Impact: Empowers players to earn real-world value (e.g., $FORGE, NFT sales) without upfront investment, fostering financial inclusion. The marketplace encourages creativity, letting players design and trade custom skins.

6. Marketing & Ecosystem Fit

Marketing Strategy:

Promote on X and Warpcast with gameplay teasers, NFT giveaways, and “zero-gas” onboarding demos to attract Web2 gamers.



Ecosystem Fit:

BattleForge brings MOBA fans (a massive, untapped market) to Nero, growing its user base.

The NFT marketplace and $FORGE token integrate with Nero’s DeFi ecosystem, enabling cross-dApp interactions s).

Community governance (via $FORGE voting) fosters a loyal player base, aligning with Nero’s decentralized ethos.



7. Continuity Potential

Roadmap:

Wave 2 (Prototype): Develop a minimum viable product (MVP) with one map, three champions, and a basic marketplace, using Nero’s simple-nero-template for NFT minting and Paymaster integration. 

Wave 3 (Build): Expand to five champions, ranked matchmaking, and advanced NFT upgrades. 





8. Team

Profile: Solo developer with experience in Unity, JavaScript, and basic Solidity. Passionate about MOBAs and motivated to bridge gaming with Web3. Completed Nero’s create-first-dapp tutorial to understand AA and Paymaster basics.

Commitment: High effort in this submission reflects dedication. Active on X, engaging with Nero’s community to refine the idea and seek feedback.

Learning Plan: Will master Nero’s UserOp SDK and Paymaster API during Wave 2, using docs and community forums to overcome technical gaps.



9. Why BattleForge Matters

Triad’s BattleForge isn’t just a game—it’s a gateway to Web3 for millions of MOBA fans. By combining addictive gameplay, player-owned assets, and Nero’s frictionless AA and Paymaster tech, we’re redefining GameFi. Players will battle, earn, and trade without ever touching a seed phrase or paying gas, making blockchain gaming as intuitive as their favorite esports titles. 
