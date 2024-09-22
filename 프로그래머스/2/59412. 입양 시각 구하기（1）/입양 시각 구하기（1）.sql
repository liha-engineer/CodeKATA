SELECT date_format(DATETIME, '%H') AS 'HOUR', COUNT(ANIMAL_ID) AS 'COUNT'
from ANIMAL_OUTS
where date_format(DATETIME, '%H') between 9 AND 19 
GROUP BY HOUR
ORDER BY HOUR ASC