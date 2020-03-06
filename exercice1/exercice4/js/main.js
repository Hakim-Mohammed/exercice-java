for (i = 2; i <= 100; i++)
{
  for (j = 2; j <= (Math.sqrt(i)); j++)
  {
    a = i % j;
    if (a != 0)
    {
      console.log(`(${i}, ${j})`);
    }
  }