SELECT i.NAME, i.DATETIME
FROM ANIMAL_INS as i
LEFT JOIN ANIMAL_OUTS as o ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE 1=1
AND o.DATETIME is NULL
ORDER BY i.DATETIME ASC
LIMIT 3