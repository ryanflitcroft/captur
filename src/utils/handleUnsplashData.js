export default function handleUnsplashData(data) {
  return data.map((item) => ({
    id: item.id,
    width: item.width,
    height: item.height,
    color: item.color,
    blurHash: item.blur_hash,
    description: item.description,
    altDescription: item.alt_description,
    imageUrlReg: item.urls.regular,
    imageUrlSm: item.urls.small,
    imageLink: item.links.html,
    artistNameFirst: item.user.first_name,
    artistNameLast: item.user.last_name,
    artistLink: item.user.links.html,
    artistInstagram: item.user.instagram_username,
    artistUnsplash: item.user.links.html,
  }));
}
