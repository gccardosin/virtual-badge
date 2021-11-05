// Altere essas informaçãos para o crachá exibir suas colocações
// Change these informations to the badge show yours placements

const LinksSocialMedia = {
  github: 'gccardosin',
  youtube: 'playguizim',
  facebook: 'guilherme.cardoso.710667',
  instagram: 'guilherme_pgz',
  twitter: '1cardosogui'
}

//CODE
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
