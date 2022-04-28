export default function handleUnsplashData(data) {
  return data.map((item) => ({
    id: data.id,
    width: data.width,
    height: data.height,
    color: data.color,
    blurHash: data.blur_hash,
    description: data.description,
    altDescription: data.alt_description,
    imageUrlReg: data.urls.regular,
    imageUrlSm: data.urls.small,
    imageLink: data.links.html,
    artistNameFirst: data.user.first_name,
    artistNameLast: data.user.last_name,
    artistLink: data.user.links.html,
    artistInstagram: data.user.instagram_username,
  }));
}
