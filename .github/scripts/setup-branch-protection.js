import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = 'drondiodev';
const repo = 'enterprise-team-platform';

async function setupBranchProtection() {
  try {
    // Configuration de la branche main
    await octokit.repos.updateBranchProtection({
      owner,
      repo,
      branch: 'main',
      required_status_checks: null,
      enforce_admins: true,
      required_pull_request_reviews: {
        required_approving_review_count: 2,
        dismiss_stale_reviews: true,
        require_code_owner_reviews: true,
      },
      restrictions: null,
    });

    // Configuration de la branche develop
    await octokit.repos.updateBranchProtection({
      owner,
      repo,
      branch: 'develop',
      required_status_checks: null,
      enforce_admins: true,
      required_pull_request_reviews: {
        required_approving_review_count: 1,
        dismiss_stale_reviews: true,
        require_code_owner_reviews: false,
      },
      restrictions: null,
    });

    console.log('✅ Règles de protection des branches configurées avec succès');
  } catch (error) {
    console.error(
      '❌ Erreur lors de la configuration des règles de protection:',
      error.message
    );
  }
}

setupBranchProtection();
