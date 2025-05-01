export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.trim().split(/\s+/);
  let initials = "";

  for (const word of words) {
    initials += word[0].toUpperCase();
  }

  return initials;
};

