# assistant-ui-mastra-agent

本リポジトリは、「AI Builder入門ガイド  ゼロから始めるエージェント開発」書籍内のMastraを用いたエージェント構築(tsukuboshiパート)における、フルスタックTypeScriptエージェントアプリケーションのサンプルコードです。

開発手順については本書を参考にしてください。  

## 技術スタック

- **バックエンド**: Mastra (Next.jsと直接統合)
- **LLM**: Amazon Bedrock Claude Haiku 4.5
- **フロントエンド**: Next.js
- **UI**: assistant-ui
- **インフラ**: AWS ELB/ECS/ECR
- **IaC**: AWS CDK

## 構成図

![構成図](./image/diagram.drawio.png)
