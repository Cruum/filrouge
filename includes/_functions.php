<?php 

function selectHistory($result)
        {               
         return  $arrayHistory= array_map(fn($v) => '<option class="input" type="text" name="idHistory" id_history="'.$v['id_history'] .'" value="'.$v['id_history'] .'">'.$v['name_history'].'</option> '  ,$result);
        }

function selectContext($result)
        {    
    return  $arrayHistory= array_map(fn($v) => '<option class="input" type="text" name="idNode" id-node="'.$v['id-node'] .'" value="'.$v['id-node'] .'">'.$v['text'].'</option> '  ,$result);
        }

function selectText($result)
        {    
    return  $arrayHistory= array_map(fn($v) => '<h4 class="tittle_node" >'.$v['text'].'</h4> '  ,$result);
        }
        
function selectTittle($result)
        {   
        
            $arrayTittle = array_map(fn ($results) => $results['name_history'], $result);
            $uniqueTittle = array_unique($arrayTittle);
            return $uniqueTittle;
        }



function getListFromArray(array $array, string $ulClass = '', string $liClass = ''): string
{
    if ($ulClass !== '') $ulClass = ' class="'.$ulClass.'"';
    if ($liClass !== '') $liClass = ' class="'.$liClass.'"';
    
    $a = array_map(fn ($v) => "<li$liClass>$v</li>", $array);
    return '<ul'.$ulClass.'>' . implode('', $a) . '</ul>';
}

function getNavigation(array $breadcrumb): string
        {
            $links = array_map(function ($page) {
                $active = $page['link'] == basename($_SERVER['PHP_SELF']) ? ' active' : '';
                return '<a href="' . $page['link'] . '" class="breadcrumb' . $active . '">' . $page['title'] . '</a>';
            }, $breadcrumb);
        
            return '<nav class="breadcrumb">' . getListFromArray($links) . '</nav>';
        } 
?>