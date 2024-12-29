import { Octokit, App } from "https://esm.sh/octokit";
const octokit = new Octokit();

// const userData1 = await octokit.rest.users.getByUsername({ username: 'rupaak' });

const userOne = document.getElementById("userone");
const userTwo = document.getElementById("usertwo");

const battleBtn = document.getElementById("battle");

battleBtn.addEventListener("click", async () => {
  if (!userOne.value || !userTwo.value) {
    alert("Please enter a username");
    return;
  }

  const userData1 = (
    await octokit.rest.users.getByUsername({
      username: userOne.value,
    })
  ).data;

  const userData2 = (
    await octokit.rest.users.getByUsername({
      username: userTwo.value,
    })
  ).data;

  const tableContent = document.getElementById("comparisionTable");
  tableContent.innerHTML = `
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  
            <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Username</th>
                    <th scope="col" class="px-6 py-3">Followers</th>
                    <th scope="col" class="px-6 py-3">Following</th>
                    <th scope="col" class="px-6 py-3">Repos</th>
                    <th scope="col" class="px-6 py-3">Gist</th>
                    <th scope="col" class="px-6 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-black border-b">
                                        <td class="px-6 py-4 text-[#FF748B]">${
                                          userData1.login
                                        }</td>

                    <td class="px-6 py-4 text-[#FF748B]">${
                      userData1.followers
                    }</td>
                    <td class="px-6 py-4 text-[#FF748B]">${
                      userData1.following
                    }</td>
                    <td class="px-6 py-4 text-[#FF748B]">${
                      userData1.public_repos
                    }</td>
                    <td class="px-6 py-4 text-[#FF748B]">${
                      userData1.public_gists
                    }</td>
                    <td class="px-6 py-4 text-[#FF748B]">${
                      userData1.created_at
                    }</td>
                  </tr>
                   <tr class="text-black border-b">
                                        <td class="px-6 py-4 text-[#667BC6]">${
                                          userData2.login
                                        }</td>

                    <td class="px-6 py-4 text-[#667BC6]">${
                      userData2.followers
                    }</td>
                    <td class="px-6 py-4 text-[#667BC6]">${
                      userData2.following
                    }</td>
                    <td class="px-6 py-4 text-[#667BC6]">${
                      userData2.public_repos
                    }</td>
                    <td class="px-6 py-4 text-[#667BC6]">${
                      userData2.public_gists
                    }</td>
                    <td class="px-6 py-4 text-[#667BC6]">${
                      userData2.created_at
                    }</td>
                  </tr>
                  <tr class="text-black border-b">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex"
                    >
                      <img class="w-10 h-10 rounded-full" src="${
                        userData1.avatar_url
                      }" alt="" />
                      <img class="w-10 h-10 rounded-full" src="${
                        userData2.avatar_url
                      }" alt="" />

                    </th>
                    <td class="px-6 py-4 ${
                      userData1.followers == userData2.followers
                        ? "text-[grey]"
                        : userData1.followers > userData2.followers
                        ? "text-[#FF748B]"
                        : "text-[#667BC6]"
                    }">${
    userData1.followers == userData2.followers
      ? "Tie"
      : userData1.followers > userData2.followers
      ? `${userData1.followers}>${userData2.followers}(${userData1.login})`
      : `${userData2.followers}>${userData1.followers}(${userData2.login})`
  }</td>
                    <td class="px-6 py-4 ${
                      userData1.following == userData2.following
                        ? "text-[grey]"
                        : userData1.following > userData2.following
                        ? "text-[#FF748B]"
                        : "text-[#667BC6]"
                    }">${
    userData1.following == userData2.following
      ? "Tie"
      : userData1.following > userData2.following
      ? `${userData1.following}>${userData2.following}(${userData1.login})`
      : `${userData2.following}>${userData1.following}(${userData2.login})`
  }</td>
                    <td class="px-6 py-4 ${
                      userData1.public_repos == userData2.public_repos
                        ? "text-[grey]"
                        : userData1.public_repos > userData2.public_repos
                        ? "text-[#FF748B]"
                        : "text-[#667BC6]"
                    }">${
    userData1.public_repos == userData2.public_repos
      ? "Tie"
      : userData1.public_repos > userData2.public_repos
      ? `${userData1.public_repos}>${userData2.public_repos}(${userData1.login})`
      : `${userData2.public_repos}>${userData1.public_repos}(${userData2.login})`
  }</td>
  <td class="px-6 py-4 ${
    userData1.public_gists == userData2.public_gists
      ? "text-[grey]"
      : userData1.public_gists > userData2.public_gists
      ? "text-[#FF748B]"
      : "text-[#667BC6]"
  }">${
    userData1.public_gists == userData2.public_gists
      ? "Tie"
      : userData1.public_gists > userData2.public_gists
      ? `${userData1.public_gists}>${userData2.public_gists}(${userData1.login})`
      : `${userData2.public_gists}>${userData1.public_gists}(${userData2.login})`
  }</td>                    <td class="px-6 py-4 ${ new Date(userData1.created_at) == new Date(userData2.created_at) ? 'text-[grey]' : new Date(userData1.created_at) < new Date(userData2.created_at) ? 'text-[#FF748B]' : 'text-[#667BC6]'}">${
    new Date(userData1.created_at) == new Date(userData2.created_at)
      ? "Tie"
      : new Date(userData1.created_at) < new Date(userData2.created_at)
      ? `${new Date(userData1.created_at).toLocaleDateString(
          "en-US"
        )}>${new Date(userData2.created_at).toLocaleDateString("en-US")}(${
          userData1.login
        })`
      : `${new Date(userData2.created_at).toLocaleDateString(
          "en-US"
        )}>${new Date(userData1.created_at).toLocaleDateString("en-US")}(${
          userData2.login
        })`
  }</td>
                  </tr>
                </tbody>
              </table>
              </div>
        `;
});

// userTwoBtn.addEventListener("click", () => {
//   if (!userTwo.value) {
//     alert("Please enter a username");
//     return;
//   }

//   userTwoBtn.disabled = true;
//   fetch(`https://api.github.com/users/${userTwo.value}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const userTwoContent = document.getElementById("userTwoContent");
//       userTwoContent.innerHTML = `
//      <div class="my-2">
//            <img class="w-10 h-10 rounded-full" src=${data.avatar_url} alt="Rounded avatar">
//       <p class="text-[grey]">${data.login} has ${data.followers} followers and ${data.following} following. He has ${data.public_repos} public repos, ${data.public_gists} public gists.</p>

//      </div>
//       `;

//       const tableContent = document.getElementById("comparisionTable");
//       tableContent.innerHTML = `
//                 <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

//           <table
//               class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
//             >
//               <thead
//                 class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
//               >
//                 <tr>
//                   <th scope="col" class="px-6 py-3">Username</th>
//                   <th scope="col" class="px-6 py-3">Followers</th>
//                   <th scope="col" class="px-6 py-3">Following</th>
//                   <th scope="col" class="px-6 py-3">Repos</th>
//                   <th scope="col" class="px-6 py-3">Gist</th>
//                   <th scope="col" class="px-6 py-3">Joined</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="text-black border-b">
//                   <th
//                     scope="row"
//                     class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     ${data.login}
//                   </th>
//                   <td class="px-6 py-4">${data.followers}</td>
//                   <td class="px-6 py-4">${data.following}</td>
//                   <td class="px-6 py-4">${data.public_repos}</td>
//                   <td class="px-6 py-4">${data.public_gists}</td>
//                   <td class="px-6 py-4">${data.created_at}</td>
//                 </tr>
//                 <tr class="text-black border-b">
//                   <th
//                     scope="row"
//                     class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     rupaak
//                   </th>
//                   <td class="px-6 py-4">20</td>
//                   <td class="px-6 py-4">11</td>
//                   <td class="px-6 py-4">11</td>
//                   <td class="px-6 py-4">11</td>
//                   <td class="px-6 py-4">2015/11/11</td>
//                 </tr>
//                 <tr class="text-black border-b">
//                   <th
//                     scope="row"
//                     class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     -
//                   </th>
//                   <td class="px-6 py-4">20 > 11(rupaak)</td>
//                   <td class="px-6 py-4">11 < 12(rakesh)</td>
//                   <td class="px-6 py-4">11 == 11(tie)</td>
//                   <td class="px-6 py-4">11 > 10 (rupaak)</td>
//                   <td class="px-6 py-4">2015/11/11 > 2021/11/11(rupaak)</td>
//                 </tr>
//               </tbody>
//             </table>
//             </div>
//       `;
//     });
//   userTwoBtn.disabled = false;
// });
